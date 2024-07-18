import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdCheckmark icon from Ionicons 4
 * @module
 */
export function IoMdCheckmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"}}]})(props);
}
export default IoMdCheckmark;
