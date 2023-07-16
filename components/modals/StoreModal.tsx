import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

function StoreModal() {
  const [isOpen, onClose] = useStoreModal((state) => [
    state.isOpen,
    state.onClose,
  ]);
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}
    >
      Future create store form
    </Modal>
  );
}

export default StoreModal;
