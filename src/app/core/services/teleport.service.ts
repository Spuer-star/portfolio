import { Injectable, signal } from '@angular/core';

/**
 * Coordinates the cinematic transition from the dice oracle to a project card.
 * Produces a single `request` signal which `TeleportOverlayComponent` listens
 * to; once the overlay has finished its animation it calls `clear()`.
 *
 * A request looks like:
 *   { project, projectIndex, faceNumeral, sourceRect, accent, ghostKind }
 * where ghostKind is 'face' (triangular dice face) or 'card' (tarot card).
 */
@Injectable({ providedIn: 'root' })
export class TeleportService {
  request = signal(null);

  summon(req) {
    this.request.set(req);
  }

  clear() {
    this.request.set(null);
  }
}
