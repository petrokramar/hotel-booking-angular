import {User} from './user';
import {Room} from './room';

export class Booking {
  id: string;
  user: User;
  room: Room;
  dateBegin: string;
  dateEnd: string
}
