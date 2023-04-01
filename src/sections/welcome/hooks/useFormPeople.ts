import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { People } from '@/modules/welcome/domain/People';
import { usePeopleContext } from '../context/WelcomeContextProvider';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters'),
  imageUrl: yup.string().required('Image Url is required').test('url', 'Invalid image url', (value) => {
    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpe?g|png|gif|svg)$/.test(value);
  }),
});

export const useFormPeople = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<People>({
    resolver: yupResolver(schema)
  });
  const { createPeople } = usePeopleContext();
  
  return {
    register,
    handleSubmit,
    errors,
    reset,
    createPeople
  }
}
