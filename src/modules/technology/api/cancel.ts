import { toast } from 'react-toastify'
import { client } from '#helpers/api'
import { isError } from '#helpers/assertion'

export const cancelTechnology = async ({
  token,
}: {
  token: string
}): Promise<void> => {
  const res = await client.technology.cancel(token)
  if (isError(res)) {
    toast.error(res.error_code)
    return
  }
}
