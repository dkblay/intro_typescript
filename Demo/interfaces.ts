
interface Observer {
    update(temp?: number, humidity?: number, pressure?: number): void;
}


interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(o: Observer): void;
}


interface DisplayElement {
    display(): void;
}


export {Subject, DisplayElement, Observer};