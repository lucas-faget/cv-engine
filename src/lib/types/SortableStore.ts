import type { DragDropManager } from "@dnd-kit/dom";

export type SortableStore = {
    manager: DragDropManager;
    index: number;
};
