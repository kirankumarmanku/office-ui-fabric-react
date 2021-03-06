import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import * as exampleStylesImport from '../../../common/_exampleStyles.scss';
const exampleStyles: any = exampleStylesImport;

export class PivotBasicExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <Pivot>
          <PivotItem
            headerText="My Files"
            linkText="I am deprecated. &quot;headerText&quot; overwrites me"
            headerButtonProps={{
              'data-order': 1,
              'data-title': 'My Files Title'
            }}
          >
            <Label className={exampleStyles.exampleLabel}>Pivot #1</Label>
          </PivotItem>
          <PivotItem linkText="Recent">
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem linkText="Shared with me">
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
