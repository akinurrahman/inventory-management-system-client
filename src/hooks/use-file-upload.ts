import { useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';

import { apiCall } from '@/lib/api/api-call';
import { getErrorMessage } from '@/lib/error';
import { getCloudinaryThumbnail } from '@/lib/generate-cloudinary-thumbnail';

interface UseFileUploadProps {
  name: string;
  multiple?: boolean;
}

export interface UploadedFile {
  url: string;
  thumbnail: string;
}

export const useFileUpload = ({ name, multiple = false }: UseFileUploadProps) => {
  const { setValue, watch } = useFormContext();
  const [uploading, setUploading] = useState(false);

  const uploadedFiles = (watch(name) as UploadedFile[]) || [];

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files.length) return;

    setUploading(true);

    const fileArray = Array.from(files);
    const cloudinaryUrls = await uploadToCloud(fileArray);

    if (cloudinaryUrls) {
      const thumbnails = cloudinaryUrls.map(getCloudinaryThumbnail);

      const newFiles: UploadedFile[] = cloudinaryUrls.map((url: string, index: number) => ({
        url,
        thumbnail: thumbnails[index],
      }));

      setValue(name, multiple ? [...uploadedFiles, ...newFiles] : newFiles);
    }

    setUploading(false);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setValue(name, updatedFiles);
  };

  return {
    uploadedFiles,
    uploading,
    handleFileChange,
    handleRemoveFile,
  };
};

const uploadToCloud = async (files: File[]) => {
  try {
    const formData = new FormData();

    files.forEach(file => formData.append('files', file));

    const response = await apiCall('/upload/files', formData, 'POST');
    return response.data; // array of URLs
  } catch (error) {
    toast.error(getErrorMessage(error));
    return null;
  }
};
