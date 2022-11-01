import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarLanding from '../NavBarLanding';
import HomeContent from '../HomeContent';

export default function LandingPage() {
  return (
    <>
    <NavBarLanding />
    <HomeContent />
    </>
  )
}
