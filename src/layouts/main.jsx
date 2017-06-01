import Menu from '../components/menu';
import MenuItem from '../components/menuItem';
import { autobind } from 'core-decorators';

@autobind()
export default class MainLayout extends React.Component {
   constructor(props) {
      super(props);
   }

   back() {
      this.props.router.goBack();
   }

   forward() {
      this.props.router.goForward();
   }

   render() {
      return (
          <div>
              <nav class="navbar navbar-inverse">
                  <div class="container">
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                              <span class="sr-only">Toggle navigation</span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                          <a class="navbar-brand" href="/">
                              Project name
                          </a>
                      </div>
                      <div id="navbar" class="collapse navbar-collapse">
                          <Menu>
                              <MenuItem href="/">Main</MenuItem>
                              <MenuItem href="/blogs">Blogs</MenuItem>
                              <MenuItem href="/users">Users</MenuItem>
                              <MenuItem href="/blabla">Bla</MenuItem>
                          </Menu>
                      </div>
                  </div>
              </nav>
              <div class="container-fluid">
                  <div>
                      <button type="button" onClick={this.back}>Go Back</button>
                  </div>
                  <div>
                      <button type="button" onClick={this.forward}>Go Forward</button>
                  </div>
                 {this.props.children}
              </div>
          </div>
      );
   }
}