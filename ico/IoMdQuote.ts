import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdQuote icon from Ionicons 4
 * @module
 */
export function IoMdQuote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z"}}]})(props);
}
export default IoMdQuote;
