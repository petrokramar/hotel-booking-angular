import {User} from './user';
import {Room} from './room';

export class Booking {
  id: number;
  user: User;
  room: Room;
  dateBegin: string;
  dateEnd: string
}
