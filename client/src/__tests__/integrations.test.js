import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import App from '../components/App';
import Root from '../Root';
import { CMS_URI } from '../redux/shop/shop.actions';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  moxios.install();
  moxios.stubRequest(CMS_URI, {
    status: 200,
    response: {
      data: {
        sneakers: [
          {
            id: 'ck75wcleo155b0b843rlkt044',
            price: 129,
            gender: 'Men',
            category: ['Running'],
            imageMain: {
              id: 'ck75w55qoe0v90b201x2oqo8l',
              url: 'https://media.graphcms.com/JqjJAtRTlethzLQxhUtQ'
            },
            model: 'Zoom 210',
            imageSecondary: {
              url: 'https://media.graphcms.com/EVQOXidUTZksHn7HzJAQ',
              id: 'ck75w55kfe0v40b209n4moxvp'
            },
            brand: 'Nike',
            sizes: '40 41 42 43 44 45 46 47',
            trending: true
          },
          {
            id: 'ck75wdz6s15950b84ohyz7kl5',
            price: 89,
            gender: 'Men',
            category: ['Running'],
            imageMain: {
              id: 'ck75w55i214n50b84ou2784ao',
              url: 'https://media.graphcms.com/5GFMfzuMR6S3nZ2I2Vo8'
            },
            model: 'BT 100',
            imageSecondary: {
              url: 'https://media.graphcms.com/SQNh9M1kTMSYRxkFTbpf',
              id: 'ck75w55jr14na0b849nb40eo6'
            },
            brand: 'Asics',
            sizes: '40 41 42 43 44 45 46 47',
            trending: null
          },
          {
            id: 'ck75x2zvae2ck0b2095pqm533',
            price: 99,
            gender: 'Men',
            category: ['Gym'],
            imageMain: {
              id: 'ck75x3fnve2dt0b200ixen8zc',
              url: 'https://media.graphcms.com/bkuG7baIS8KkZN8QVWJA'
            },
            model: 'WightLift10',
            imageSecondary: {
              url: 'https://media.graphcms.com/Kq3vT0FNQEiqMX8XL0Kr',
              id: 'ck75x3fne17770b84kyozcp21'
            },
            brand: 'Adidas',
            sizes: '40 41 42 43 44 45 46 47 ',
            trending: true
          }
        ]
      }
    }
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('fetch list of searched sneakers and displays them', done => {
  moxios.wait(() => {
    // wrapped.update();
    // console.log(wrapped.find('.results-list').children);

    expect(wrapper.contains(<div class="sneaker-li" />));
    done();

    wrapper.unmount();
  });
});

it('fetch list of trending sneakers and displays them', done => {
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('.react-multi-carousel-track').children.length).toEqual(
      2
    );
    done();
    wrapper.unmount();
  });
});
