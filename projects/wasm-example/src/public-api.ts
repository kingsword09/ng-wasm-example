/*
 * Public API Surface of wasm-example
 */

export * from './lib/wasm-example.service';
export * from './lib/wasm-example.component';
import init from "./lib/example-rust-lib/pkg"
export { get_factorial } from './lib/example-rust-lib/pkg';
export { init as initExampleRust };
