export type ContactContextType = {
  isEmailSent: boolean
  setIsEmailSent: React.Dispatch<React.SetStateAction<boolean>>
  emailRegex: RegExp
  isUsernameValid: boolean
  setIsUsernameValid: React.Dispatch<React.SetStateAction<boolean>>
  isEmailValid: boolean
  setIsEmailValid: React.Dispatch<React.SetStateAction<boolean>>
  isMessageValid: boolean
  setIsMessageValid: React.Dispatch<React.SetStateAction<boolean>>
  usernameDisplay: boolean
  setUsernameDisplay: React.Dispatch<React.SetStateAction<boolean>>
  messageDisplay: boolean
  setMessageDisplay: React.Dispatch<React.SetStateAction<boolean>>
  emailDisplay: boolean
  setEmailDisplay: React.Dispatch<React.SetStateAction<boolean>>
  isEmailLoading: boolean
  setIsEmailLoading: React.Dispatch<React.SetStateAction<boolean>>
  emailDidntSend: boolean
  setEmailDidntSend: React.Dispatch<React.SetStateAction<boolean>>
  progressValue: number
  setProgressValue: React.Dispatch<React.SetStateAction<number>>
  emailMessagesState: string[]
  setEmailMessagesState: React.Dispatch<React.SetStateAction<string[]>>
  emailMessagesArr: string[]
  startDomainRegex: RegExp
  endDomainRegex: RegExp
  emailMessageObj: {
    noInput: string
    startDomain: string
    endDomain: string
    atSymbol: string
    tld: string
  }
  showSuccessMessage: () => void
  handleUserName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleUsernameDisplay: () => void
  handleEmailDisplay: () => void
  handleMessageDisplay: () => void
  raiseProgressValue: () => void
  raiseProgressValueTest: () => void
}
