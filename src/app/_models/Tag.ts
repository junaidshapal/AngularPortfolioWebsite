export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typecript', 'darkgreen');
    static readonly JAVA = new Tag('Java', 'darkblue');
    static readonly PYTHON = new Tag('Python', 'darkred');
    static readonly JS = new Tag('JavaScript', 'indigo');
    static readonly CSHARP = new Tag('CSharp', 'purple');
    static readonly REACT = new Tag('React', 'orange');
    static readonly SQL = new Tag('MySQL', 'green');
    


    private constructor(private readonly key:string, public readonly color:string){

    }

    toString(){
        return this.key;
    }
}