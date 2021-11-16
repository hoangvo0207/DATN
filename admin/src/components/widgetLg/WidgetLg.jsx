import './widgetLg.scss';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>


    </div>
  );
};

export default WidgetLg;
