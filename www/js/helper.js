function getDBName(lid) {
    switch(lid) {
		case 1 : //Thai for English
        	name = 'th-en.db';
        	break;
    	case 2://Thai for German
			name = 'th-ge.db'
        	break;
    	case 3://Lao for English
        	name = 'la-en.db';
        	break;
    	case 4://Lao for French
        	name = 'la-fr.db';
        	break;
    	case 5://English for Thai 
			name = 'en-th.db';
			break;
		case 6: //German for Thai 
			name = 'ge-th.db';
			break;
		case 7://Thai for French
			name = 'th-fr.db';
			break;
		case 8://Thai for Russians
			name = 'th-ru.db';
			break;
		case 9://Thai for Chinese
			name = 'th-ch.db';
			break;
    }
    
    return lid;
}