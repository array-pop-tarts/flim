/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */
import React from 'react';

class FilmForm extends React.Component {
    render() {
        return (
            <section id="filmAdd">
                <form id="newScreening" action="" method="post">
                    <div className="row">
                        <div className="col-sm-24 col-md-12">
                            <div className="input-group has-warning">
                                <label for="filmTitle" className="sr-only">Title</label>
                                <input id="filmTitle" className="form-control" type="text" placeholder="Title" />
                                <span className="input-group-addon">New</span>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-24 col-md-12">
                            <div className="form-group">
                                <label for="filmTranslation" className="sr-only">Translation to English</label>
                                <input id="filmTranslation" className="form-control" type="text" placeholder="English" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-24 col-md-15">
                            <div className="form-group">
                                <label for="filmReleased" className="sr-only">Released</label>
                                <select id="filmReleased" name="" className="form-control">
                                    <option value="">- Released -</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-24 col-md-15">
                            <div className="input-group has-success">
                                <label for="screeningVenue" className="sr-only">Venue</label>
                                <input id="screeningVenue" className="form-control" type="text" placeholder="Venue" />
                                <span className="input-group-addon">In List</span>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-24 col-md-9">
                            <div className="form-group">
                                <label for="screeningDate" className="sr-only">Date</label>
                                <input id="screeningDate" className="form-control" type="text" placeholder="Today" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-24 col-md-12">
                            <div className="input-group has-warning">
                                <label for="screeningFriends" className="sr-only">Friends</label>
                                <input id="screeningFriends" className="form-control" type="text" placeholder="Friends" />
                                <span className="input-group-addon">New</span>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-24">
                            <button type="submit" className="btn btn-success btn-block">Action!</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default FilmForm;