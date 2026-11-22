import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;

  /**
   * 1. Connect and get an Observable / Subject using RxJS webSocket
   * @param url WebSocket URL (e.g., 'ws://localhost:8080')
   */
  connect(url: string): WebSocketSubject<any> {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket({
        url,
        openObserver: {
          next: () => console.log('[WebSocket] Connection established'),
        },
        closeObserver: {
          next: () => console.log('[WebSocket] Connection closed'),
        },
      });
    }
    return this.socket$;
  }

  /**
   * Send a message through the WebSocketSubject
   * @param msg Data or payload to send
   */
  sendMessage(msg: any): void {
    if (this.socket$) {
      this.socket$.next(msg);
    }
  }

  /**
   * Close the WebSocketSubject connection
   */
  closeConnection(): void {
    if (this.socket$) {
      this.socket$.complete();
    }
  }

  /**
   * 2. Alternative: Create a custom Observable wrapping native browser WebSocket
   * @param url WebSocket URL
   */
  createWebSocketObservable(url: string): Observable<any> {
    return new Observable((observer) => {
      const ws = new WebSocket(url);

      ws.onopen = () => {
        console.log('[Native WebSocket] Connected to', url);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          observer.next(data);
        } catch {
          observer.next(event.data);
        }
      };

      ws.onerror = (error) => {
        observer.error(error);
      };

      ws.onclose = () => {
        observer.complete();
      };

      // Cleanup logic on unsubscribe
      return () => {
        ws.close();
      };
    });
  }
}
