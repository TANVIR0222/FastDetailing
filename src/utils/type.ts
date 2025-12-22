export interface Service {
  id: number;
  name: string;
  services: string;
}

export interface SwipeableItemProps {
  item: Service;
  onDelete: (id: string) => void;
}

export type UpComeingProps = {
  setNextTabs: (tabId: number) => void;
};
