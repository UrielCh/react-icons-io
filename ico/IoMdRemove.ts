import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdRemove icon from Ionicons 4
 * @module
 */
export function IoMdRemove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96 235h320v42H96z"}}]})(props);
}
export default IoMdRemove;
