export interface Tree {
  id?: string;
  node?: any;
}

export const defaultValue: Readonly<Tree> = {
  id: '',
  node: null,
};
