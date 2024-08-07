import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdTrash icon from Ionicons 4
 * @module
 */
export function IoMdTrash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"}}]})(props);
}
export default IoMdTrash;
