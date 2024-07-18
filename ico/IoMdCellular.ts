import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdCellular icon from Ionicons 4
 * @module
 */
export function IoMdCellular(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 448h384V64L64 448z"}}]})(props);
}
export default IoMdCellular;
