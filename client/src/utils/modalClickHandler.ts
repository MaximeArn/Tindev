export default ({ target, modalWrapper, closeModal }: any) => {
  !modalWrapper.current?.contains(target) && closeModal();
};
