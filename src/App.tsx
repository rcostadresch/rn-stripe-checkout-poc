/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Button, Linking, SafeAreaView } from 'react-native';

import { Line, TouchableOpacityButton, View } from 'styles';
import { Service } from 'service';

function App(): JSX.Element {
  const [isProductOwner, setIsProductOwner] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TouchableOpacityButton backgroundColor={'red'}>
          <Button
            title="Access as Product Owner"
            onPress={() => {
              setIsProductOwner(true);
              setIsCustomer(false);
            }}
            color={'white'}
          />
        </TouchableOpacityButton>
        <TouchableOpacityButton backgroundColor={'blue'}>
          <Button
            title="Access as Customer"
            onPress={() => {
              setIsProductOwner(false);
              setIsCustomer(true);
            }}
            color={'white'}
          />
        </TouchableOpacityButton>
        <Line />
      </View>

      {(isProductOwner || isCustomer) && (
        <>
          {isProductOwner && (
            <View>
              <TouchableOpacityButton backgroundColor={'red'}>
                <Button
                  title="Sync Stripe Accounts"
                  onPress={() => {
                    Service.upsertGatewayAccount();
                  }}
                  color={'white'}
                />
              </TouchableOpacityButton>

              <TouchableOpacityButton backgroundColor={'red'}>
                <Button
                  title="Create Product"
                  onPress={() => {
                    Service.upsertGatewayProduct();
                  }}
                  color={'white'}
                />
              </TouchableOpacityButton>
            </View>
          )}
          {isCustomer && (
            <View>
              <TouchableOpacityButton backgroundColor={'blue'}>
                <Button
                  title="Buy Ticket"
                  onPress={() => {
                    Linking.openURL(
                      'https://buy.stripe.com/test_6oE01s4oP86G27S8wB?client_reference_id=cus_OpZujvMGX9GPpn',
                    );
                  }}
                  color={'white'}
                />
              </TouchableOpacityButton>
              <TouchableOpacityButton backgroundColor={'blue'}>
                <Button
                  title="View Receipt"
                  onPress={() => {
                    Linking.openURL(
                      'https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xTzBxMTRQcngyUGJ6aWVpKMf2takGMgbyv4xaAIU6LBZ9eQ2jVKVBCx0NGpQPsn3zlBNDYOv4ki6R55UfM0Md7xZNGm9Bj5x-1ax_',
                    );
                  }}
                  color={'white'}
                />
              </TouchableOpacityButton>
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

export default App;
