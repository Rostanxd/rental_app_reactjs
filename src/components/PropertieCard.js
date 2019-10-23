import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles({
    card: {
        maxWidth: 275,
        flex: '0 0 27%',
        margin: '.9em',
    },
    cardTitle: {
        backgroundColor: grey,
        width: '100%',
        padding: 0,
    },
    cardContent: {
        padding: 0
    },
    media: {
        height: 140,
    },
    table: {},
    tableBody: {},
    tableRow: {
        padding: 0,
    },
    tableCell: {
        lineHeight: 0,
        paddingTop: 0,
        paddingLeft: 10,
        paddingBottom: 0,
        paddingRight: 0,
    }
});

export default function PropertieCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                />
                <CardContent className={classes.cardContent}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h3">
                        {props.title > 0 ? formatter.format(props.title) : 'N/A'}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        {props.subtitle}
                    </Typography>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableBody className={classes.tableBody}>
                                <TableRow className={classes.tableRow}>
                                    <TableCell className={classes.tableCell}>
                                        <h5>Year Built</h5>
                                        <p>{props.yearBuilt}</p>
                                    </TableCell>
                                    <TableCell className={classes.tableCell}>
                                        <h5>Monthly Rent</h5>
                                        <p>{props.monthlyRent > 0 ?
                                            formatter.format(props.monthlyRent) :
                                            'N/A'
                                        }</p>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tableRow}>
                                    <TableCell className={classes.tableCell}>
                                        <h5>Gross Yield</h5>
                                        <p>{props.grossYield > 0 ?
                                            roundToTwo(props.grossYield).toString() + '%' :
                                            'N/A'
                                        }</p>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

/*  MATH FUNCTIONS */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
