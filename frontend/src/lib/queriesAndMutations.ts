import {
  useQuery, // use for fetch data
  useMutation,
  useQueryClient, // use for modifiying data
} from '@tanstack/react-query'
import { NewUser, Template } from '../types'
import { createUserAccount, getAllTemplates, signInAccount, uploadTemplate } from './APIs'

// react-query를 사용하는 이유 : fetching, mutation 데이터를 단순화하기 위해서 

// 회원가입 (새로운 계정 생성)
export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: NewUser) => createUserAccount(user),
  })
}

// login
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: {email: string, password: string}) => signInAccount(user),
  })
}


// template upload (create)
export const useUploadNewTemplate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (template: Template) => uploadTemplate(template),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['GET_ALL_TEMPLATES']
      })
    }
  })
}

export const useGetAllTemplates = () => {
  return useQuery({
    queryFn: getAllTemplates,
    queryKey: ['GET_ALL_TEMPLATES']
  })
}