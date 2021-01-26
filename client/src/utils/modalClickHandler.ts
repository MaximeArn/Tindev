export default ({ target, modal, closeModal }: any) => {
  !modal.current?.contains(target) && closeModal();
};
