import { InjectionToken } from '@angular/core';

export interface Ia {
	getHello(): string;
}

export const IaInjectionToken = new InjectionToken<Ia>('IA');