import { ContactDto } from "./contact.dto";
import { RandomUserResponseMetaDataDto } from "./random-user-response-meta-data.dto";

export class RandomUserResponseDto {
    public results: ContactDto[];
    public info: RandomUserResponseMetaDataDto;
}