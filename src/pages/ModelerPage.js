import React from 'react';
import BpmnModeler from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import css from './ModelerPage.module.scss';

export class ModelerPage extends React.Component {

    modeler = new BpmnModeler({
        keyboard: {
            bindTo: window,
        }
    });
    modelerContainer;

    componentDidMount() {
        this.modeler.attachTo(this.modelerContainer);
        this.modeler.createDiagram();
    }

    componentWillUnmount() {
        this.modeler.detach();
    }

    render() {
        return (
            <>
                <h1>Modeler</h1>
                <div className={css.modelerContainer}
                     ref={ref => this.modelerContainer = ref}/>
            </>
        )
    }
}
