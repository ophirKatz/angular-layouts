import { InjectionToken } from '@angular/core';

export interface Ib {
	add(x: number, y: number): number;
}

export const IbInjectionToken = new InjectionToken<Ib>('IB');