export function Config(configItem: {path: string}) {
	return function(target: Object, key: string | symbol) {
		fetch(configItem.path).then(
			response => {
				const res = response.json();
				target[key] = res;
			}
		);
	};
}