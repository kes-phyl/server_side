export class CreateItemDto{
 readonly name: string;
 readonly description: string;
 readonly qty: number
}

//import the dto controller since you already exported it to be used 
//like a schema-like type thing