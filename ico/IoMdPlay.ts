import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdPlay icon from Ionicons 4
 * @module
 */
export function IoMdPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96 52v408l320-204L96 52z"}}]})(props);
}
export default IoMdPlay;
