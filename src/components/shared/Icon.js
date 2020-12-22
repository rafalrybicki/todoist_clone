import React from 'react';
import { 
   Menu,
   Home,
   Search,
   Plus,
   Graph,
   Info,
   Bell,
   Inbox,
   Today,
   Upcoming,
   Chevron,
   Project,
   Filter,
   Grip,
   More
} from './Icons';

function Icon({icon }) {
   switch (icon) {
      case 'menu':
         return <Menu />
      case 'home':
         return <Home />;
      case 'search':
         return <Search />;
      case 'plus':
         return <Plus />;
      case 'graph':
         return  <Graph />;
      case 'info':
         return <Info />;
      case 'bell':
         return <Bell />;
      case 'inbox':
         return  <Inbox />;
      case 'today':
         return <Today />;
      case 'upcoming':
         return <Upcoming />;
      case 'chevron':
         return <Chevron />;
      case 'project':
         return <Project />;
      case 'filter':
         return <Filter />;
      case 'grip':
         return <Grip />;
      case 'more':
         return <More />;
      default:
         return null;
   }
}

export default Icon
