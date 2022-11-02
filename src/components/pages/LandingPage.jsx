import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBarLanding from '../NavBarLanding';
import LandingContent from '../content/LandingContent';

function LandingPage() {
  return (
    <>
    <NavBarLanding />
    <LandingContent />
    </>
  )
};

export default LandingPage;
