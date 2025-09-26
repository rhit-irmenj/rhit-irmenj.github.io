print("TODO: replace httpserver.py with YOUR web server. Serve files from './public'")
#julia irmen 
import socket
import time
import signal
import traceback

# Live coding:
# 0. Show how you load this into your IDE.
# 1. Walk through the parts of handling a HTTP request.
# 2. Run and connect to this server in the browser.
# 3. Create a file called hello.html containing the message, "Hello, World!".
# 4. Set the response body to the read-in contents of hello.html.
#       Use "rb" for the open() mode.
#       Now you should be able to change hello.html and refresh the browser to see the changes, without restarting the server!

def get_requested_filename(filename):
    period_filename = "." + filename.split(" ")[1]
    return period_filename

def get_file_type(filename):
    if filename.endswith("png"):
        return ".png"
    if filename.endswith("html"):
        return ".html"
    if filename.endswith("ico"):
        return ".ico"
    if filename.endswith("js"):
        return ".js"
    if filename.endswith("css"):
        return ".css"
    else:
        return ".img"
def get_content_type(type):
    if type == ".png":
        return "image/png"
    if type == ".ico":
        return "image/x-icon"
    if type == ".js":
        return "text/javascript; charset=utf-8"
    if type == ".css":
        return "text/css; charset=utf-8"
    elif type == ".html":
        return "text/html"
    
def main():

    server = create_connection(port = 8080)

    while True:
        # 1. Wait for the browser to send a HTTP Request
        connection_to_browser = accept_browser_connection_to(server)

        # 2. Read the HTTP Request from the browser
        reader_from_browser = connection_to_browser.makefile(mode='rb')
        try:
            request_line = reader_from_browser.readline().decode("utf-8") # decode converts from bytes to text
            print()
            print('Request:')
            print(request_line)
        except Exception as e:
            print("Error while reading HTTP Request:", e)
            traceback.print_exc() # Print what line the server crashed on.
            shutdown_connection(connection_to_browser)
            continue

        # 3. Write the HTTP Response back to the browser
        writer_to_browser = connection_to_browser.makefile(mode='wb')
        try:
            # TODO: read "Hello, World!" from an HTML file instead of this encoded string.
            # response_body = "Hello, CSSE280!".encode("utf-8")
            request_file = get_requested_filename(request_line)
            file_type = get_file_type(request_file)
            
            if request_file == "./public/shutdown":
                print("Server shutting down")
                shutdown_connection(connection_to_browser)
                exit(0)

            with open(request_file, "rb") as fd:
                response_body = fd.read()
            contnet = get_content_type(file_type)
            content_type = contnet
            response_headers = "\r\n".join([
                'HTTP/1.1 200 OK',
                f'Content-Type: {content_type}',
                f'Content-length: {len(response_body)}',
                'Connection: close',
                '\r\n'
            ]).encode("utf-8") # encode converts strings to raw bytes

            # These lines just PRINT the HTTP Response to your Terminal.
            print()
            print('Response headers:')
            print(response_headers)
            print()
            print('Response body:')
            print(response_body)
            print()

            # These lines do the real work; they WRITE the HTTP Response to the Browser.
            writer_to_browser.write(response_headers)
            writer_to_browser.write(response_body)
            writer_to_browser.flush()
        except Exception as e:
            print("Error while writing HTTP Response:", e)
            traceback.print_exc() # print what line the server crashed on
    
        shutdown_connection(connection_to_browser)



# Don't worry about the details of the rest of the code below.
# It is VERY low-level code for creating the underlying connection to the browser.

def create_connection(port):
    addr = ("", port)  # "" = all network adapters; usually what you want.
    server = socket.create_server(addr, family=socket.AF_INET6, dualstack_ipv6=True) # prevent rare IPV6 softlock on localhost connections
    server.settimeout(2)
    print(f'Server started on port {port}. Try: http://localhost:{port}/hello.html')
    return server

def accept_browser_connection_to(server):
    while True:
        try:
            (conn, address) = server.accept()
            conn.settimeout(2)
            return conn
        except socket.timeout:
            print(".", end="", flush=True)
        except KeyboardInterrupt:
            exit(0)

def shutdown_connection(connection_to_browser):
    connection_to_browser.shutdown(socket.SHUT_RDWR)
    connection_to_browser.close()



if __name__ == "__main__":
    print()
    main()

