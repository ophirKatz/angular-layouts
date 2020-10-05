import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export async function sleep(timeout: number): Promise<unknown> {
	return of(timeout).pipe(delay(timeout)).toPromise();
}