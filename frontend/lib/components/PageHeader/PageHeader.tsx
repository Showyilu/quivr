import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { useUserApi } from '@/lib/api/user/useUserApi'
import { useUserData } from '@/lib/hooks/useUserData'
import { ButtonType } from '@/lib/types/QuivrButton'

import styles from './PageHeader.module.scss'

type Props = {
  iconName: string
  label: string
  buttons: ButtonType[]
}

const navClassName = `
  flex items-center relative mr-0 sm:mr-3 px-3 h-8 rounded-xl
  font-medium text-sm
  cursor-pointer
`

export const PageHeader = ({
  iconName,
  label,
  buttons
}: Props): JSX.Element => {
  const pathname = usePathname()
  const chatActivated = pathname ? pathname.includes('/search') : false
  const studioActived = pathname ? pathname.includes('/studio') : false
  const assistantsActived = pathname ? pathname.includes('/assistants') : false
  const profileActivated = pathname ? pathname.includes('/user') : false

  const { userIdentityData } = useUserData()

  let username = userIdentityData?.username ?? 'Profile'

  useEffect(() => {
    username = userIdentityData?.username ?? 'Profile'
  }, [userIdentityData])

  const { getUserCredits } = useUserApi()

  useEffect(() => {
    void (async () => {
      const res = await getUserCredits()
      // setRemainingCredits(res)
    })()
  }, [])

  const Comment01IconActivated = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#fe6232'}
      fill={'none'}
      {...props}
    >
      <path
        d='M8 13.5H16M8 8.5H12'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )

  const Comment01Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#000000'}
      fill={'none'}
      {...props}
    >
      <path
        d='M8 13.5H16M8 8.5H12'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )

  const AiBrain03IconActivated = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#fe6232'}
      fill={'none'}
      {...props}
    >
      <path
        d='M4 16.5001C4 18.1569 5.34315 19.5001 7 19.5001C7 20.8808 8.11929 22.0001 9.5 22.0001C10.8807 22.0001 12 20.8808 12 19.5001C12 20.8808 13.1193 22 14.5 22C15.8807 22 17 20.8807 17 19.5C18.6569 19.5 20 18.1569 20 16.5C20 15.9313 19.8418 15.3996 19.567 14.9465C20.9527 14.6814 22 13.463 22 12C22 10.537 20.9527 9.31855 19.567 9.0535C19.8418 8.60037 20 8.06866 20 7.5C20 5.84315 18.6569 4.5 17 4.5C17 3.11929 15.8807 2 14.5 2C13.1193 2 12 3.11938 12 4.50009C12 3.11938 10.8807 2.00009 9.5 2.00009C8.11929 2.00009 7 3.11938 7 4.50009C5.34315 4.50009 4 5.84324 4 7.50009C4 8.06876 4.15822 8.60046 4.43304 9.05359C3.04727 9.31865 2 10.5371 2 12.0001C2 13.4631 3.04727 14.6815 4.43304 14.9466C4.15822 15.3997 4 15.9314 4 16.5001Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 14.5L9.34189 8.97434C9.43631 8.69107 9.7014 8.5 10 8.5C10.2986 8.5 10.5637 8.69107 10.6581 8.97434L12.5 14.5M15.5 8.5V14.5M8.5 12.5H11.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )

  const AiBrain03Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#000000'}
      fill={'none'}
      {...props}
    >
      <path
        d='M4 16.5001C4 18.1569 5.34315 19.5001 7 19.5001C7 20.8808 8.11929 22.0001 9.5 22.0001C10.8807 22.0001 12 20.8808 12 19.5001C12 20.8808 13.1193 22 14.5 22C15.8807 22 17 20.8807 17 19.5C18.6569 19.5 20 18.1569 20 16.5C20 15.9313 19.8418 15.3996 19.567 14.9465C20.9527 14.6814 22 13.463 22 12C22 10.537 20.9527 9.31855 19.567 9.0535C19.8418 8.60037 20 8.06866 20 7.5C20 5.84315 18.6569 4.5 17 4.5C17 3.11929 15.8807 2 14.5 2C13.1193 2 12 3.11938 12 4.50009C12 3.11938 10.8807 2.00009 9.5 2.00009C8.11929 2.00009 7 3.11938 7 4.50009C5.34315 4.50009 4 5.84324 4 7.50009C4 8.06876 4.15822 8.60046 4.43304 9.05359C3.04727 9.31865 2 10.5371 2 12.0001C2 13.4631 3.04727 14.6815 4.43304 14.9466C4.15822 15.3997 4 15.9314 4 16.5001Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 14.5L9.34189 8.97434C9.43631 8.69107 9.7014 8.5 10 8.5C10.2986 8.5 10.5637 8.69107 10.6581 8.97434L12.5 14.5M15.5 8.5V14.5M8.5 12.5H11.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )

  const BotIconActivated = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#fe6232'}
      fill={'none'}
      {...props}
    >
      <path
        d='M4 15.5C2.89543 15.5 2 14.6046 2 13.5C2 12.3954 2.89543 11.5 4 11.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 15.5C21.1046 15.5 22 14.6046 22 13.5C22 12.3954 21.1046 11.5 20 11.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 7L7 4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M17 7L17 4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <circle
        cx='7'
        cy='3'
        r='1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <circle
        cx='17'
        cy='3'
        r='1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 7H10.5C7.67157 7 6.25736 7 5.37868 7.90898C4.5 8.81796 4.5 10.2809 4.5 13.2069C4.5 16.1329 4.5 17.5958 5.37868 18.5048C6.25736 19.4138 7.67157 19.4138 10.5 19.4138H11.5253C12.3169 19.4138 12.5962 19.5773 13.1417 20.1713C13.745 20.8283 14.6791 21.705 15.5242 21.9091C16.7254 22.1994 16.8599 21.7979 16.5919 20.6531C16.5156 20.327 16.3252 19.8056 16.526 19.5018C16.6385 19.3316 16.8259 19.2898 17.2008 19.2061C17.7922 19.074 18.2798 18.8581 18.6213 18.5048C19.5 17.5958 19.5 16.1329 19.5 13.2069C19.5 10.2809 19.5 8.81796 18.6213 7.90898C17.7426 7 16.3284 7 13.5 7Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M9.5 15C10.0701 15.6072 10.9777 16 12 16C13.0223 16 13.9299 15.6072 14.5 15'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.00896 11H9'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.009 11H15'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )

  const BotIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#000000'}
      fill={'none'}
      {...props}
    >
      <path
        d='M4 15.5C2.89543 15.5 2 14.6046 2 13.5C2 12.3954 2.89543 11.5 4 11.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 15.5C21.1046 15.5 22 14.6046 22 13.5C22 12.3954 21.1046 11.5 20 11.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 7L7 4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M17 7L17 4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <circle
        cx='7'
        cy='3'
        r='1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <circle
        cx='17'
        cy='3'
        r='1'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 7H10.5C7.67157 7 6.25736 7 5.37868 7.90898C4.5 8.81796 4.5 10.2809 4.5 13.2069C4.5 16.1329 4.5 17.5958 5.37868 18.5048C6.25736 19.4138 7.67157 19.4138 10.5 19.4138H11.5253C12.3169 19.4138 12.5962 19.5773 13.1417 20.1713C13.745 20.8283 14.6791 21.705 15.5242 21.9091C16.7254 22.1994 16.8599 21.7979 16.5919 20.6531C16.5156 20.327 16.3252 19.8056 16.526 19.5018C16.6385 19.3316 16.8259 19.2898 17.2008 19.2061C17.7922 19.074 18.2798 18.8581 18.6213 18.5048C19.5 17.5958 19.5 16.1329 19.5 13.2069C19.5 10.2809 19.5 8.81796 18.6213 7.90898C17.7426 7 16.3284 7 13.5 7Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M9.5 15C10.0701 15.6072 10.9777 16 12 16C13.0223 16 13.9299 15.6072 14.5 15'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.00896 11H9'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.009 11H15'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )

  const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#000000'}
      fill={'none'}
      {...props}
    >
      <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )

  const UserCircleIconActivated = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={20}
      height={20}
      color={'#fe6232'}
      fill={'none'}
      {...props}
    >
      <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )

  return (
    <div className='sticky top-0 left-0 right-0 z-20 flex flex-col grow-0 shrink-0 basis-auto min-h-[56px] border-b'>
      <div className='flex flex-1 items-center justify-between px-4'>
        <>
          <Link href='/search' className='flex items-center mr-4'>
            <b className={styles.quivr_text_primary}>Deep Knowledge</b>
          </Link>
        </>
        <div className='flex items-center'>
          <Link
            href='/chat'
            className={classNames(
              navClassName,
              'group',
              chatActivated && 'bg-white shadow-md',
              chatActivated
                ? styles.quivr_text_primary
                : 'text-gray-500 hover:bg-gray-200'
            )}
          >
            <div className='mr-2'>
              {chatActivated ? <Comment01IconActivated /> : <Comment01Icon />}
            </div>

            <span>New Chat</span>
          </Link>

          <Link
            href='/studio'
            className={classNames(
              navClassName,
              'group',
              studioActived && 'bg-white shadow-md',
              studioActived
                ? styles.quivr_text_primary
                : 'text-gray-500 hover:bg-gray-200'
            )}
          >
            <div className='mr-2'>
              {studioActived ? <AiBrain03IconActivated /> : <AiBrain03Icon />}
            </div>
            <span>Brains</span>
          </Link>
          <Link
            href='/assistants'
            className={classNames(
              navClassName,
              'group',
              assistantsActived && 'bg-white shadow-md',
              assistantsActived
                ? styles.quivr_text_primary
                : 'text-gray-500 hover:bg-gray-200'
            )}
          >
            <div className='mr-2'>
              {assistantsActived ? <BotIconActivated /> : <BotIcon />}
            </div>

            <span>Assistants</span>
          </Link>
        </div>

        <div className='flex items-center flex-shrink-0'>
          <Link
            href='/user'
            className={classNames(
              navClassName,
              'group',
              profileActivated
                ? styles.quivr_text_primary
                : 'text-gray-500 hover:bg-gray-200'
            )}
          >
            <div className='mr-2'>
              {profileActivated ? (
                <UserCircleIconActivated />
              ) : (
                <UserCircleIcon />
              )}
            </div>

            <span>{username}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
