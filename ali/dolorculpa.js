class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log('Checkbox changed:', this);
    }

    render() {
        return (
            <input
                type="checkbox"
                ref={(node) => { this.checkboxNode = node; }}
                onChange={this.handleChange}
            />
        );
    }
}
