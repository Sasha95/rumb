import { ICard } from "../../api/dto/Card";
import moment from "moment";
import { ICurrent } from "../../store/currentSelect/currentState";

export const filter = (data: ICard[], selector: ICurrent) => {
    let result = data;
    if (selector.interests && selector.interests.length > 0) {
      result = result.filter(x => selector.interests.includes(x.interes))
    }
    if (selector.places) {
      result = result.filter(x => (selector.places.indexOf(x.town) !== -1 || selector.places.indexOf(x.country) !== -1))
    }
    if (selector.dateOfStart && selector.dateOfEnd) {
      result = result.filter(x => moment(x.dateOfStart).isSameOrAfter(moment(selector.dateOfStart))
        && moment(x.dateOfEnd).isSameOrBefore(moment(selector.dateOfEnd)))
    }
    if (selector.numberOfPeople) {
      result = result.filter(x => x.freeSeats >= selector.numberOfPeople);
    }
    return result
}

export const sorting = (array: ICard[], descending = true) => {
  if(descending){
    array.sort((a, b) => a.cost > b.cost ? 1 : -1)
  }else{
    array.sort((a, b) => a.cost < b.cost ? 1 : -1)
  }
}
