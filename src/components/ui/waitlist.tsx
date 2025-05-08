import { Waitlist } from '@clerk/nextjs'

export default function WaitlistPage() {
  return <Waitlist
    appearance={{
      variables: {
        colorPrimary: '#00a63e'
    }
}} />
}