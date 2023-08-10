// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		namespace Lucia {
			type Auth = import('$lib/server/lucia').Auth;
			type DatabaseUserAttributes = {};
			type DatabaseSessionAttributes = {};
		}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
	}
}

export {};