import http.server
import socketserver
import mimetypes
import os

class BrotliHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        """Override send_head to handle Brotli encoding properly."""
        path = self.translate_path(self.path)

        # Brotli 파일 처리
        if path.endswith(".br"):
            uncompressed_path = path[:-3]  # ".br" 확장자 제거
            if os.path.exists(uncompressed_path):  
                path = uncompressed_path  # 압축되지 않은 파일이 있으면 그걸 사용
            else:
                self.send_response(200)
                self.send_header("Content-Encoding", "br")  # Brotli 인코딩 명시
                self.send_header("Content-Type", self.guess_type(path[:-3]))  # MIME 타입 설정
                self.send_header("Content-Length", str(os.path.getsize(path)))
                self.end_headers()
                return open(path, "rb")  # Brotli 파일 그대로 반환

        return super().send_head()

PORT = 8000
with socketserver.TCPServer(("", PORT), BrotliHTTPRequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
