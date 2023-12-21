type Props = {
  name: string
  students: string[]
}
type ClassProps = Pick<Props, 'name'>
export class Class {
  private name: Props['name']
  private students : Props['students']

  constructor({ name }: ClassProps) {
    this.name = name
    this.students = []
  }

  public getName() {
    return this.name
  }

  public addStudent(value: string) {
    this.students = [...this.students, value]
  }

  public getStudents() {
    return this.students
  }
}