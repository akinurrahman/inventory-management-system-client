import { FileUploadProps } from '../../types';
import MultipleFileUploader from './multiple-file-upload';

export const renderFileByVariant = (props: FileUploadProps) => {
  switch (props.variant) {
    case 'multiple':
      return <MultipleFileUploader props={props} />;
  }
};
