// app/api/subscribe/route.js
import clientPromise from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('arthouse'); // Use your database name: 'arthouse'
    const collection = db.collection('footer'); // Use your collection name: 'footer'

    // Check if the email already exists in the footer collection
    const existingSubscriber = await collection.findOne({ email });

    if (existingSubscriber) {
      return NextResponse.json({ error: 'You are already subscribed to the footer list!' }, { status: 409 });
    }

    // Insert the new email into the footer collection
    await collection.insertOne({ email, subscribedToFooterAt: new Date() });

    return NextResponse.json({ message: 'Successfully subscribed to the footer list!' }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to subscribe to the footer list. Please try again.' }, { status: 500 });
  }
}