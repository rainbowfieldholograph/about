import { KeyboardEvent, useState } from 'react';
import { Modal } from '../modal/Modal';
import { WorkModal } from '../workModal/WorkModal';
import styles from './WorkCard.module.css';
import { WorkCardProps } from './WorkCard.props';

export const WorkCard = ({
  image,
  imagePreview,
  title,
  description,
  stack,
  projectLink,
  gitLink,
}: WorkCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') openModal();
  };

  return (
    <>
      <div
        role="button"
        onKeyDown={handleKeydown}
        tabIndex={0}
        onClick={openModal}
        className={styles.card}
      >
        <img src={imagePreview ? imagePreview : image} alt={title} />
        <h2>{title}</h2>
        <h3>{stack}</h3>
      </div>
      <Modal className={styles.modal} open={isOpen} onClose={() => setIsOpen(false)}>
        <WorkModal
          image={image}
          title={title}
          description={description}
          stack={stack}
          projectLink={projectLink}
          gitLink={gitLink}
        />
      </Modal>
    </>
  );
};
